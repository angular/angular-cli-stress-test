/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2780Component } from './comp-2780.component';

describe('Comp2780Component', () => {
  let component: Comp2780Component;
  let fixture: ComponentFixture<Comp2780Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2780Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2780Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
