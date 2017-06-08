/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4071Component } from './comp-4071.component';

describe('Comp4071Component', () => {
  let component: Comp4071Component;
  let fixture: ComponentFixture<Comp4071Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4071Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4071Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
