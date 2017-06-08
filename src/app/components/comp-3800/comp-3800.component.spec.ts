/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3800Component } from './comp-3800.component';

describe('Comp3800Component', () => {
  let component: Comp3800Component;
  let fixture: ComponentFixture<Comp3800Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3800Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3800Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
