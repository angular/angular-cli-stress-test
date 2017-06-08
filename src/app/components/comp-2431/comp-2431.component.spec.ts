/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2431Component } from './comp-2431.component';

describe('Comp2431Component', () => {
  let component: Comp2431Component;
  let fixture: ComponentFixture<Comp2431Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2431Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2431Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
