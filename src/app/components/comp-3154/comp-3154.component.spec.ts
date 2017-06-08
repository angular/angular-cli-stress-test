/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3154Component } from './comp-3154.component';

describe('Comp3154Component', () => {
  let component: Comp3154Component;
  let fixture: ComponentFixture<Comp3154Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3154Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3154Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
