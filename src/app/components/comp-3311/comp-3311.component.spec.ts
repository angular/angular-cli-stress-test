/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3311Component } from './comp-3311.component';

describe('Comp3311Component', () => {
  let component: Comp3311Component;
  let fixture: ComponentFixture<Comp3311Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3311Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3311Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
