/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2487Component } from './comp-2487.component';

describe('Comp2487Component', () => {
  let component: Comp2487Component;
  let fixture: ComponentFixture<Comp2487Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2487Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2487Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
