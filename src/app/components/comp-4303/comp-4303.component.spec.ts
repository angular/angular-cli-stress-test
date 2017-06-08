/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4303Component } from './comp-4303.component';

describe('Comp4303Component', () => {
  let component: Comp4303Component;
  let fixture: ComponentFixture<Comp4303Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4303Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4303Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
