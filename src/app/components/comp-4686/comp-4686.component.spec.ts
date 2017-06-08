/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4686Component } from './comp-4686.component';

describe('Comp4686Component', () => {
  let component: Comp4686Component;
  let fixture: ComponentFixture<Comp4686Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4686Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4686Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
