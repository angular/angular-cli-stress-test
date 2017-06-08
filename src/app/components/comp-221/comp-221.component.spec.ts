/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp221Component } from './comp-221.component';

describe('Comp221Component', () => {
  let component: Comp221Component;
  let fixture: ComponentFixture<Comp221Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp221Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp221Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
