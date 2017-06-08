/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2550Component } from './comp-2550.component';

describe('Comp2550Component', () => {
  let component: Comp2550Component;
  let fixture: ComponentFixture<Comp2550Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2550Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2550Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
