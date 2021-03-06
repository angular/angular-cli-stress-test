/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service734Service } from './service-734.service';

describe('Service734Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service734Service]
    });
  });

  it('should ...', inject([Service734Service], (service: Service734Service) => {
    expect(service).toBeTruthy();
  }));
});
