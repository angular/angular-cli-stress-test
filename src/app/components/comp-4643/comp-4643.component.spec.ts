/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4643Component } from './comp-4643.component';

describe('Comp4643Component', () => {
  let component: Comp4643Component;
  let fixture: ComponentFixture<Comp4643Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4643Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4643Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
