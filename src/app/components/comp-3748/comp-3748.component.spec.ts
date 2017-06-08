/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3748Component } from './comp-3748.component';

describe('Comp3748Component', () => {
  let component: Comp3748Component;
  let fixture: ComponentFixture<Comp3748Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3748Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3748Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
