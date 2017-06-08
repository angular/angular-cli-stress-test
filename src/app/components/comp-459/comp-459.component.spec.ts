/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp459Component } from './comp-459.component';

describe('Comp459Component', () => {
  let component: Comp459Component;
  let fixture: ComponentFixture<Comp459Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp459Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp459Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
