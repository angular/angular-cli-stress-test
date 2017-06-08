/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp789Component } from './comp-789.component';

describe('Comp789Component', () => {
  let component: Comp789Component;
  let fixture: ComponentFixture<Comp789Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp789Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp789Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
