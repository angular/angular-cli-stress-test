/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp270Component } from './comp-270.component';

describe('Comp270Component', () => {
  let component: Comp270Component;
  let fixture: ComponentFixture<Comp270Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp270Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp270Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
