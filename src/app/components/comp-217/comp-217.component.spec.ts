/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp217Component } from './comp-217.component';

describe('Comp217Component', () => {
  let component: Comp217Component;
  let fixture: ComponentFixture<Comp217Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp217Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp217Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
