/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp924Component } from './comp-924.component';

describe('Comp924Component', () => {
  let component: Comp924Component;
  let fixture: ComponentFixture<Comp924Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp924Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp924Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
