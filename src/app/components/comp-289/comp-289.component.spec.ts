/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp289Component } from './comp-289.component';

describe('Comp289Component', () => {
  let component: Comp289Component;
  let fixture: ComponentFixture<Comp289Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp289Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp289Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
