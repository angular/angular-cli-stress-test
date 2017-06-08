/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3142Component } from './comp-3142.component';

describe('Comp3142Component', () => {
  let component: Comp3142Component;
  let fixture: ComponentFixture<Comp3142Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3142Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3142Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
