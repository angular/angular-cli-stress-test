/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp167Component } from './comp-167.component';

describe('Comp167Component', () => {
  let component: Comp167Component;
  let fixture: ComponentFixture<Comp167Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp167Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp167Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
