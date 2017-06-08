/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp853Component } from './comp-853.component';

describe('Comp853Component', () => {
  let component: Comp853Component;
  let fixture: ComponentFixture<Comp853Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp853Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp853Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
