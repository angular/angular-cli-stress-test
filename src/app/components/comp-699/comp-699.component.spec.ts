/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp699Component } from './comp-699.component';

describe('Comp699Component', () => {
  let component: Comp699Component;
  let fixture: ComponentFixture<Comp699Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp699Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp699Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
