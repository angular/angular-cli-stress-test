/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4245Component } from './comp-4245.component';

describe('Comp4245Component', () => {
  let component: Comp4245Component;
  let fixture: ComponentFixture<Comp4245Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4245Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4245Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
