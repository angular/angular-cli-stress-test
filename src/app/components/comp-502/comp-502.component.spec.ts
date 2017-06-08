/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp502Component } from './comp-502.component';

describe('Comp502Component', () => {
  let component: Comp502Component;
  let fixture: ComponentFixture<Comp502Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp502Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp502Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
