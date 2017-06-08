/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service744Service } from './service-744.service';

describe('Service744Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service744Service]
    });
  });

  it('should ...', inject([Service744Service], (service: Service744Service) => {
    expect(service).toBeTruthy();
  }));
});
