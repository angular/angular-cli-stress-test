/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp986Component } from './comp-986.component';

describe('Comp986Component', () => {
  let component: Comp986Component;
  let fixture: ComponentFixture<Comp986Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp986Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp986Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
