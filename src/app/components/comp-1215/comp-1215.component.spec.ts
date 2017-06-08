/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1215Component } from './comp-1215.component';

describe('Comp1215Component', () => {
  let component: Comp1215Component;
  let fixture: ComponentFixture<Comp1215Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1215Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1215Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
