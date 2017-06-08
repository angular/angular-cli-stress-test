/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp638Component } from './comp-638.component';

describe('Comp638Component', () => {
  let component: Comp638Component;
  let fixture: ComponentFixture<Comp638Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp638Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp638Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
