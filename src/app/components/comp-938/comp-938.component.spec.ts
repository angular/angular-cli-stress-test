/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp938Component } from './comp-938.component';

describe('Comp938Component', () => {
  let component: Comp938Component;
  let fixture: ComponentFixture<Comp938Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp938Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp938Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
