/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp81Component } from './comp-81.component';

describe('Comp81Component', () => {
  let component: Comp81Component;
  let fixture: ComponentFixture<Comp81Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp81Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp81Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
