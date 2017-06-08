/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3614Component } from './comp-3614.component';

describe('Comp3614Component', () => {
  let component: Comp3614Component;
  let fixture: ComponentFixture<Comp3614Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3614Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3614Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
