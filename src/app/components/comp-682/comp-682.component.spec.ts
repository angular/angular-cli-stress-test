/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp682Component } from './comp-682.component';

describe('Comp682Component', () => {
  let component: Comp682Component;
  let fixture: ComponentFixture<Comp682Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp682Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp682Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
