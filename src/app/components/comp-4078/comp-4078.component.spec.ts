/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4078Component } from './comp-4078.component';

describe('Comp4078Component', () => {
  let component: Comp4078Component;
  let fixture: ComponentFixture<Comp4078Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4078Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4078Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
