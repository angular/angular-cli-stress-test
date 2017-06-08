/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp53Component } from './comp-53.component';

describe('Comp53Component', () => {
  let component: Comp53Component;
  let fixture: ComponentFixture<Comp53Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp53Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp53Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
