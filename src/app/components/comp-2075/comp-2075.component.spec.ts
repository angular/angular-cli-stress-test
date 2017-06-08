/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2075Component } from './comp-2075.component';

describe('Comp2075Component', () => {
  let component: Comp2075Component;
  let fixture: ComponentFixture<Comp2075Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2075Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2075Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
