/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2287Component } from './comp-2287.component';

describe('Comp2287Component', () => {
  let component: Comp2287Component;
  let fixture: ComponentFixture<Comp2287Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2287Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2287Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
