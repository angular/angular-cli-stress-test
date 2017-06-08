/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp685Component } from './comp-685.component';

describe('Comp685Component', () => {
  let component: Comp685Component;
  let fixture: ComponentFixture<Comp685Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp685Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp685Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
