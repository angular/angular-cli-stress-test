/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp532Component } from './comp-532.component';

describe('Comp532Component', () => {
  let component: Comp532Component;
  let fixture: ComponentFixture<Comp532Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp532Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp532Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
