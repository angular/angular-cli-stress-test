/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2181Component } from './comp-2181.component';

describe('Comp2181Component', () => {
  let component: Comp2181Component;
  let fixture: ComponentFixture<Comp2181Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2181Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2181Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
