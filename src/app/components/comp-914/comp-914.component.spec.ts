/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp914Component } from './comp-914.component';

describe('Comp914Component', () => {
  let component: Comp914Component;
  let fixture: ComponentFixture<Comp914Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp914Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp914Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
