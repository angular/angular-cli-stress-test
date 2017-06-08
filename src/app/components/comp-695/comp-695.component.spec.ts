/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp695Component } from './comp-695.component';

describe('Comp695Component', () => {
  let component: Comp695Component;
  let fixture: ComponentFixture<Comp695Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp695Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp695Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
