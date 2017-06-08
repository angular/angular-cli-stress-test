/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp357Component } from './comp-357.component';

describe('Comp357Component', () => {
  let component: Comp357Component;
  let fixture: ComponentFixture<Comp357Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp357Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp357Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
