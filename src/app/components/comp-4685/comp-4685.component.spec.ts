/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4685Component } from './comp-4685.component';

describe('Comp4685Component', () => {
  let component: Comp4685Component;
  let fixture: ComponentFixture<Comp4685Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4685Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4685Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
