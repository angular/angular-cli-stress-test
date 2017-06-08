/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp554Component } from './comp-554.component';

describe('Comp554Component', () => {
  let component: Comp554Component;
  let fixture: ComponentFixture<Comp554Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp554Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp554Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
