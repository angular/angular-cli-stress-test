/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4165Component } from './comp-4165.component';

describe('Comp4165Component', () => {
  let component: Comp4165Component;
  let fixture: ComponentFixture<Comp4165Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4165Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4165Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
