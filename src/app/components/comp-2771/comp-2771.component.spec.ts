/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2771Component } from './comp-2771.component';

describe('Comp2771Component', () => {
  let component: Comp2771Component;
  let fixture: ComponentFixture<Comp2771Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2771Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2771Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
