/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp597Component } from './comp-597.component';

describe('Comp597Component', () => {
  let component: Comp597Component;
  let fixture: ComponentFixture<Comp597Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp597Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp597Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
