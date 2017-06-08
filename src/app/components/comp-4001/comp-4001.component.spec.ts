/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4001Component } from './comp-4001.component';

describe('Comp4001Component', () => {
  let component: Comp4001Component;
  let fixture: ComponentFixture<Comp4001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
