/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3723Component } from './comp-3723.component';

describe('Comp3723Component', () => {
  let component: Comp3723Component;
  let fixture: ComponentFixture<Comp3723Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3723Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3723Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
