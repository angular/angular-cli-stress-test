/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service994Service } from './service-994.service';

describe('Service994Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service994Service]
    });
  });

  it('should ...', inject([Service994Service], (service: Service994Service) => {
    expect(service).toBeTruthy();
  }));
});
