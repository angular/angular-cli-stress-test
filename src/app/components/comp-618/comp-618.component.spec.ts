/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp618Component } from './comp-618.component';

describe('Comp618Component', () => {
  let component: Comp618Component;
  let fixture: ComponentFixture<Comp618Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp618Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp618Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
