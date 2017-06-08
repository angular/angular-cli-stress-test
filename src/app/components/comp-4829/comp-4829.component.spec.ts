/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4829Component } from './comp-4829.component';

describe('Comp4829Component', () => {
  let component: Comp4829Component;
  let fixture: ComponentFixture<Comp4829Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4829Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4829Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
